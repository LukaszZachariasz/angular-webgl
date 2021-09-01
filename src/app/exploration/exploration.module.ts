import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebGlService} from "./services/web-gl.service";
import {ExplorationRoutingModule} from "./exploration-routing.module";
import {SceneComponent} from "./scene/scene.component";


@NgModule({
  declarations: [
    SceneComponent
  ],
  imports: [
    ExplorationRoutingModule,
    CommonModule
  ],
  providers: [
    WebGlService
  ]
})
export class ExplorationModule {
}
