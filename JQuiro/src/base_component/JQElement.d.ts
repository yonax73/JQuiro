/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 16 _ 03 _ 2014
* clases de jquiro
**/
export declare class jqStyle {
    /***CLASES PARA COMPONENTE TREE***/
    static JQ_TREE_DF: string;
    static JQ_TREE_BRANCH_DF: string;
    static JQ_TREE_LEAF_DF: string;
    /******CLASES DE ANIMACIONES *******/
    static JQ_HIDE: string;
    static JQ_SHOW: string;
    static JQ_FILL_LEFT_IN: string;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 16 _ 03 _ 2014
* Lista de eventos javascript
**/
export declare class jqEvent {
    static BLUR: string;
    static CHANGE: string;
    static CLICK: string;
    static DB_LCLICK: string;
    static FOCUS: string;
    static KEY_DOWN: string;
    static KEY_PRESS: string;
    static KEY_UP: string;
    static LOAD: string;
    static MOUSE_DOWN: string;
    static MOUSE_MOVE: string;
    static MOUSE_OUT: string;
    static MOUSE_OVER: string;
    static MOUSE_UP: string;
    static RESET: string;
    static SELECT: string;
    static SUBMIT: string;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Observador de clases y eventos
**/
export declare class jqObserver {
    private static collectionClassName;
    private static collectionClassKey;
    static registerClass(_name: string): void;
    static nextKey(_name: string): number;
    static finalize(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Atributos y metodos bases para los componentes JQuiro
**/
export declare class jqBaseComponent {
    public jqElementHtml: HTMLElement;
    private jqLabel;
    private jqClassName;
    constructor(_baseEle: HTMLElement);
    /** API JQBaseComponent **/
    public getJQLabel(): string;
    public setJQLabel(_jqLabel: string): void;
    public getJQClassName(): string;
    public setJQClassName(_jqclassName: string): void;
    /**
    Agrega un objeto jqBaseComponent
    */
    public appendElement(_jqElement: jqBaseComponent): void;
    /**
    Inserta un objeto antes del indicado.
    */
    public appendBeforeElement(_jqElement: jqBaseComponent, jqTargetElement: jqBaseComponent): void;
    /**
    Inserta un objeto antes del indicado.
    */
    public appendAfertElement(_jqElement: jqBaseComponent, jqTargetElement: jqBaseComponent): void;
    /**
    Reemplaza un objeto jqBaseComponent por uno nuevo
    */
    public replaceElement(_jqElement: jqBaseComponent, _oldJqElement: jqBaseComponent): void;
    /**
    Elimina un objeto jqBaseComponent
    */
    public removeElement(_jqElement: jqBaseComponent): void;
    /**
    Elimina todos los objetos jqBaseComponent
    */
    public removeAllElements(): void;
    /**
    Elimina un nodo hijo
    */
    public removeChildElement(_node: Node): void;
    /**
    Se Elimina  el objeto del Dom
    */
    public remove(): void;
    /**
    Retorna el tamano del childNodes
    */
    public getChildNodesElementsLength(): number;
    /**
    Retorna  childNodes
    */
    public getChildNodesElements(): NodeList;
    /**
    Retorna el nodo del  childNodes
    */
    public getChildNodeElement(_index: any): Node;
    /**
    Retorna el primer hijo
    */
    public getFirstChildElement(): Node;
    /**
    Retorna el ultimo hijo
    */
    public getLastChildElement(): Node;
    /**
    Retorna el siguiente hermano
    */
    public getNextSiblingElement(): Node;
    /**
    Retorna el nodo padre
    */
    public getParentElement(): Node;
    /**
    Comprueba si dos elementos son iguales
    */
    public isEqualElement(_jqElement: jqBaseComponent): boolean;
    /**
    Comprueba si dos objetos son los mismos
    */
    public equals(_jqElement: jqBaseComponent): boolean;
    /**
    Crea un id dinamicamente
    */
    public createAutoId(): void;
    public toHtml(): HTMLElement;
    /****** API DE EVENTOS *********/
    public addEvent(_event: string, _function: any): void;
    public removeEvent(_event: string, _function: any): void;
    /****** API ID *********/
    public getId(): string;
    public setId(_id: string): void;
    public existId(_id: string): boolean;
    /****** API CLASS *********/
    public addClass(_class: string): void;
    public addCollectionClass(_classes: string[]): void;
    public removeClass(_class: string): void;
    public removeCollectionClass(_classes: string[]): void;
    public removeAllClass(): void;
    public toggleClass(_class: string): void;
    public exitsClass(_class: string): boolean;
    public countClass(): number;
    public getItemClass(_index: number): string;
    /****** API DATASET *********/
    public getDateSet(): DOMStringMap;
    public addDataSet(_key: string, _value: any): void;
    /****** API HTML *********/
    public getInnerHtml(): string;
    public setInnerHtml(_innerHtml: string): void;
    public getInnerText(): string;
    public setInnerText(_innerText: string): void;
    public appendHtml(_htmlElement: HTMLElement): void;
    public replaceHtml(_htmlElement: HTMLElement, _oldHtmlElement: HTMLElement): void;
    public isEqualHtml(_htmlElement: HTMLElement): boolean;
    /******API NODE ****************/
    public getNodeName(): string;
    public setNodeName(_nodeName: string): void;
    /****** API ESTILOS *********/
    public getStyle(): MSStyleCSSProperties;
    public setStyle(_style: MSStyleCSSProperties): void;
    public getCssWidth(): string;
    public setCssWidth(_width: string): string;
    public applyCss(_cssMap: string): void;
    /**Finalize***/
    public expire(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :22/03/2014
* Interfaz IJQElement
**/
export interface IJQElement {
    init(): void;
    create(id: HTMLElement): void;
    getHtml(): HTMLElement;
    finalize(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Definición de etiqueta html <div>
**/
export declare class div extends jqBaseComponent {
    constructor(_className?: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Definición de etiqueta html <i>
**/
export declare class i extends jqBaseComponent {
    constructor(_className?: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Definición de etiqueta html <li>
**/
export declare class li extends jqBaseComponent {
    constructor(_className?: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Definición de etiqueta html <p>
**/
export declare class p extends jqBaseComponent {
    constructor(_className?: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Definición de etiqueta html <span>
**/
export declare class span extends jqBaseComponent {
    constructor(_className?: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :12/03/2014
* Definición de etiqueta html <ul>
**/
export declare class ul extends jqBaseComponent {
    constructor(_className?: string);
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :22/03/2014
* Interfaz IJQList
**/
export interface IJQList {
    jqElements: jqBaseComponent[];
    length: number;
    index: number;
    add(element: jqBaseComponent): void;
    addIndex(element: jqBaseComponent, index: number): void;
    getFirst(): jqBaseComponent;
    getLast(): jqBaseComponent;
    getNext(): jqBaseComponent;
    getBack(): jqBaseComponent;
    getItem(index: number): jqBaseComponent;
    pullOutFirst(): jqBaseComponent;
    pullOutLast(): jqBaseComponent;
    pullOutNext(): jqBaseComponent;
    pullOutBack(): jqBaseComponent;
    pullOutItem(index: number): jqBaseComponent;
    remove(element: jqBaseComponent): void;
    removeIndex(index: number): void;
    removeAll(): void;
    clear(): void;
    destroy(): void;
    isEmpty(): boolean;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha :22/03/2014
* Lista de JQElement
**/
export declare class jqList<JQ extends jqBaseComponent> implements IJQList {
    public jqElements: JQ[];
    public length: number;
    public index: number;
    private parent;
    constructor(_parent: jqBaseComponent);
    public add(_element: JQ): void;
    public addIndex(_element: JQ, _index: number): void;
    public getFirst(): JQ;
    public getLast(): JQ;
    public getNext(): JQ;
    public getBack(): JQ;
    public getItem(_index: number): JQ;
    public pullOutFirst(): JQ;
    public pullOutLast(): JQ;
    public pullOutNext(): JQ;
    public pullOutBack(): JQ;
    public pullOutItem(_index: number): JQ;
    public remove(_element: JQ): void;
    public removeIndex(_index: number): void;
    public removeAll(): void;
    public clear(): void;
    public destroy(): void;
    public isEmpty(): boolean;
}
