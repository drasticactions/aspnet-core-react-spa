import { observable } from 'mobx';

export class AppState {
    @observable isDebug: boolean = false;
}