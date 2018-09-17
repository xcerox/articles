import { createAction } from 'Factories/create-action';
import { LOAD_STARTED, LOAD_COMPLETED,  LOAD_FAILED } from 'Constants/loading-types';

const StartLoading = createAction(LOAD_STARTED, 'component');
const completeLoading = createAction(LOAD_COMPLETED, 'component', 'payload');
const failLoading = createAction(LOAD_FAILED, 'component');

export { StartLoading, completeLoading, failLoading};
