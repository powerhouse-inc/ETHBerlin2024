import { BaseDocument, ExtendedState, PartialState, applyMixins, SignalDispatch } from 'document-model/document';
import { ScopeOfWorkState, ScopeOfWorkLocalState } from './types';
import { ScopeOfWorkAction } from './actions';
import { reducer } from './reducer';
import utils from './utils';
import ScopeOfWork_Deliverables from './deliverables/object';

export * from './deliverables/object';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface ScopeOfWork extends 
    ScopeOfWork_Deliverables {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class ScopeOfWork extends BaseDocument<ScopeOfWorkState, ScopeOfWorkAction, ScopeOfWorkLocalState> {
    static fileExtension = 'phsow';

    constructor(initialState?: Partial<ExtendedState<PartialState<ScopeOfWorkState>, PartialState<ScopeOfWorkLocalState>>>, dispatch?: SignalDispatch) {
        super(reducer, utils.createDocument(initialState), dispatch);
    }

    public saveToFile(path: string, name?: string) {
        return super.saveToFile(path, ScopeOfWork.fileExtension, name);
    }

    public loadFromFile(path: string) {
        return super.loadFromFile(path);
    }

    static async fromFile(path: string) {
        const document = new this();
        await document.loadFromFile(path);
        return document;
    }
}

applyMixins(ScopeOfWork, [
    ScopeOfWork_Deliverables
]);

export { ScopeOfWork };