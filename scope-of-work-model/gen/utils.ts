import { DocumentModelUtils, utils as base } from 'document-model/document';
import { ScopeOfWorkAction, ScopeOfWorkState, ScopeOfWorkLocalState } from './types';
import { reducer } from './reducer';

export const initialGlobalState: ScopeOfWorkState = {"deliverables":[],"projects":[],"roadmaps":[],"milestones":[],"owners":[]};
export const initialLocalState: ScopeOfWorkLocalState = {};

const utils: DocumentModelUtils<ScopeOfWorkState, ScopeOfWorkAction, ScopeOfWorkLocalState> = {
    fileExtension: 'phsow',
    createState(state) {
        return { global: { ...initialGlobalState, ...state?.global }, local: { ...initialLocalState, ...state?.local } };
    },
    createExtendedState(extendedState) {
        return base.createExtendedState(
            { ...extendedState, documentType: 'powerhouse/scope-of-work' },
            utils.createState
        );
    },
    createDocument(state) {
        return base.createDocument(
            utils.createExtendedState(state),
            utils.createState
        );
    },
    saveToFile(document, path, name) {
        return base.saveToFile(document, path, 'phsow', name);
    },
    saveToFileHandle(document, input) {
        return base.saveToFileHandle(document, input);
    },
    loadFromFile(path) {
        return base.loadFromFile(path, reducer);
    },
    loadFromInput(input) {
        return base.loadFromInput(input, reducer);
    },
};

export default utils;