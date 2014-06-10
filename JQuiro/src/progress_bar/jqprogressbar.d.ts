/// <reference path="../base_component/JQElement.d.ts" />
import jqE = require('.././base_component/JQElement');
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 22 - 03 - 2014
* Elemento progress de progressBar bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgress extends jqE.div implements jqE.IJQElement {
    private progressBarList;
    constructor(_jqProgressBar: jqProgressBar);
    public init(): void;
    public create(_id: HTMLElement): void;
    public start(): void;
    public add(_jqProgressBar: jqProgressBar): void;
    public isStaked(): boolean;
    public getProgressBarList(): jqE.jqList<jqProgressBar>;
    public setProgressBarList(_progressBar: jqE.jqList<jqProgressBar>): void;
    public getHtml(): HTMLElement;
    public finalize(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 22 - 03 - 2014
* Elemento progressBar de progressBar bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgressBar extends jqE.div implements jqE.IJQElement {
    private content;
    private contentLegend;
    private loadedAnimated;
    private showLabel;
    private legend;
    private valueNow;
    private valueMin;
    private valueMax;
    private valueMilliSeconds;
    constructor(_valueNow: number, _label: string);
    public init(): void;
    public create(_id: HTMLElement): void;
    public start(): void;
    public clear(): void;
    public isRangeValid(_value: number): boolean;
    public getContent(): jqE.span;
    public setContent(_content: jqE.span): void;
    public isLoadedAnimated(): boolean;
    public setLoadedAnimated(_loadedAnimated: boolean): void;
    public getValueNow(): number;
    public setValueNow(_valueNow: number): void;
    public getValueMin(): number;
    public setValueMin(_valueMin: number): void;
    public getValueMax(): number;
    public setValueMax(_valueMax: number): void;
    public getValueMilliSeconds(): number;
    public setValueMilliSeconds(_milliSeconds: number): void;
    public isShowLabel(): boolean;
    public setShowLabel(_showLabel: boolean): void;
    public isLegend(): boolean;
    public setLegend(_legend: boolean): void;
    public getContentLegend(): jqE.span;
    public isContentLegend(_contentLegend: jqE.span): void;
    public getHtml(): HTMLElement;
    public finalize(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 21 - 03 - 2014
* Barra de progreso success bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgressBarSuccess extends jqProgressBar {
    constructor(_valueNow: number, _label: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 21 - 03 - 2014
* Barra de progreso info bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgressBarInfo extends jqProgressBar {
    constructor(_valueNow: number, _label: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 21 - 03 - 2014
* Barra de progreso Warning bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgressBarWarning extends jqProgressBar {
    constructor(_valueNow: number, _label: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 21 - 03 - 2014
* Barra de progreso Danger bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgressBarDanger extends jqProgressBar {
    constructor(_valueNow: number, _label: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 21 - 03 - 2014
* Barra de progreso striped success bootstrap (http://getbootstrap.com/components/#progress)
**/
export declare class jqProgressStriped extends jqProgress {
    private animated;
    constructor(_jqProgressBar: jqProgressBar);
    public isAnimated(): boolean;
    public setAnimated(_animated: boolean): void;
}
/**Se crea clase de constantes para progress bar de bootstrap, sabiendo que solo se van a usar con progressbar***/
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 19 - 03 - 2014
* clases progress bar bootstrap
**/
export declare class jqProgressBarConst {
    static PROGRESS: string;
    static PROGRESS_BAR: string;
    static SR_ONLY: string;
    static PROGRESS_BAR_SUCCESS: string;
    static PROGRESS_BAR_INFO: string;
    static PROGRESS_BAR_WARNING: string;
    static PROGRESS_BAR_DANGER: string;
    static PROGRESS_STRIPED: string;
    static ACTIVE: string;
}
