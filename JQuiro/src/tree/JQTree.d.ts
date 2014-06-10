/// <reference path="../base_component/JQElement.d.ts" />
/// <reference path="../icon/jqicon.d.ts" />
import jqE = require('.././base_component/JQElement');
import jqI = require('.././icon/jqicon');
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 13 - 03 - 2014
Estructura arbol
**/
export declare class jqTree {
    private tree;
    private branchList;
    constructor();
    private init();
    public collapse(): void;
    public expand(): void;
    public addBranch(_branch: jqBranch): void;
    public create(_id: HTMLElement): void;
    public getHtmlTree(): HTMLElement;
    public getTree(): jqE.ul;
    public setTree(_tree: jqE.ul): void;
    public getBranchList(): jqBranch[];
    public setBranchList(_branchList: jqBranch[]): void;
    public finalize(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 13 - 03 - 2014
* Rama de la estructura arbol
**/
export declare class jqBranch {
    private branch;
    private content;
    private leaves;
    private iconOpen;
    private iconClose;
    private iconCurrent;
    private open;
    private collapse;
    private readOnly;
    private expandAll;
    private branchList;
    private leavesList;
    private branchChildrenList;
    constructor(_jqLabel: string);
    private init();
    public addLeaf(_leaf: jqLeaf): void;
    public addBranch(_branch: jqBranch): void;
    public collapseBranchs(): void;
    public collapseLeaves(): void;
    public expandBranchs(): void;
    public expandLeaves(): void;
    public setReadOnlyLeaves(): void;
    public setReadOnlyBranchs(): void;
    /*** GETTERS AND SETTERS ***/
    public getChildrenList(): jqBranch[];
    public getChildrenLength(): number;
    public getBranch(): jqE.i;
    public setBranch(_branch: jqE.i): void;
    public getLeaves(): jqE.ul;
    public setLeaves(_leaves: jqE.ul): void;
    public getIconOpen(): jqI.jqIcon;
    public setIconOpen(_icon: jqI.jqIcon): void;
    public getIconClose(): jqI.jqIcon;
    public setIconClose(_icon: jqI.jqIcon): void;
    public getContent(): jqE.span;
    public setContent(_content: jqE.span): void;
    public isOpen(): boolean;
    public setOpen(_open: boolean): void;
    public getBranchList(): jqBranch[];
    public setBranchList(_branchList: jqBranch[]): void;
    public getLeavesList(): jqLeaf[];
    public setLeavesList(_leavesList: jqLeaf[]): void;
    public getIconCurrent(): jqI.jqIcon;
    public setIconCurrent(_icon: jqI.jqIcon): void;
    public isCollapse(): boolean;
    public setCollapse(_collapse: boolean): void;
    public isReadOnly(): boolean;
    public setReadOnly(_readOnly: boolean): void;
    public isExpandAll(): boolean;
    public setExpandAll(_expand: boolean): void;
    public finalize(): void;
}
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 13 - 03 - 2014
* Hoja de estructura de arbol
**/
export declare class jqLeaf {
    private leaf;
    private iconSelected;
    private iconUnSelected;
    private iconCurrent;
    private content;
    private selected;
    private readOnly;
    constructor(_jqLabel: string);
    private init();
    public selectedLeaf(): void;
    public unSelectedLeaf(): void;
    public getLeaf(): jqE.li;
    public setLeaf(_leaf: jqE.li): void;
    public getIconSelected(): jqI.jqIcon;
    public setIconSelected(_icon: jqI.jqIcon): void;
    public getIconUnSelected(): jqI.jqIcon;
    public setIconUnSelected(_icon: jqI.jqIcon): void;
    public getIconCurrent(): jqI.jqIcon;
    public setIconCurrent(_icon: jqI.jqIcon): void;
    public getContent(): jqE.span;
    public setContent(_content: jqE.span): void;
    public isSelected(): boolean;
    public setSelected(_selected: boolean): void;
    public isReadOnly(): boolean;
    public setReadOnly(_readOnly: boolean): void;
    public finalize(): void;
}
