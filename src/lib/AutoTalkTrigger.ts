/* eslint-disable max-classes-per-file */

export class AutoTalkStiggerBase {
  constructor(params: AutoTalkTriggerSettings) {
    this.interval = params.interval || 120;
    this.fluctuationRate = params.fluctuationRate || 0;

    this.enabled = params.enabled == null ? true : params.enabled;

    this.autoStart = params.autoStart == null ? true : params.autoStart;
  }

  /** 自動トークの間隔秒数 */
  interval: number;

  /** 間隔秒数の揺らぎ率 0～1 */
  fluctuationRate: number;

  /** 自動トークが有効であるか */
  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;
  }

  private _enabled?: boolean;

  /** 自動トークのカウントをすぐ始める */
  readonly autoStart: boolean;
}

export type AutoTalkTriggerSettings = {
  [name in keyof AutoTalkStiggerBase]?: AutoTalkStiggerBase[name];
};

export class AutoTalkTrigger extends AutoTalkStiggerBase {
  /** 自動トークのカウント */
  count = 0;

  private canTalkByCount = false;

  private timer?: NodeJS.Timeout;

  private currentInterval!: number;

  constructor(params: AutoTalkTriggerSettings) {
    super(params);
    this.updateCurrentInterval();
    if (this.autoStart) this.startCount();
  }

  get enabled() {
    return super.enabled;
  }

  set enabled(value) {
    super.enabled = value;
    if (!value) this.count = 0;
  }

  /** 自動トーク可能 */
  get canTalk() {
    return this.enabled && this.canTalkByCount;
  }

  /** 自動トークのカウントを開始する */
  startCount() {
    this.timer = setInterval(this.countUp.bind(this), 1000);
  }

  /** 自動トークのカウントを終了する */
  stopCount() {
    if (this.timer) clearInterval(this.timer);
  }

  talked() {
    this.count = 0;
  }

  private countUp() {
    if (this.canTalk || !this.enabled) return;

    ++this.count;
    if (this.count >= this.currentInterval) this.canTalkByCount = true;
  }

  private updateCurrentInterval() {
    const fluctuation = this.fluctuationRate * (Math.random() - 0.5) * 2;
    this.currentInterval = this.interval * fluctuation;
  }
}
