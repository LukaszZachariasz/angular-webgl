import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WebGlService} from "../services/web-gl.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit, AfterViewInit {
  @ViewChild('sceneCanvas') private canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private webGlService: WebGlService,
  ) {}

  ngOnInit(): void {}

  private _60fpsInterval = 16.666666666666666667;
  private gl: WebGLRenderingContext | undefined;


  ngAfterViewInit(): void {
    if (!this.canvas) {
      alert('canvas not supplied! cannot bind WebGL context!');
      return;
    }
    this.gl = this.webGlService.initialiseWebGLContext(
      this.canvas.nativeElement
    );
    // Set up to draw the scene periodically.
    const drawSceneInterval = interval(this._60fpsInterval);
    drawSceneInterval.subscribe(() => {
      this.drawScene();
    });
  }

  /**
   * Draws the scene
   */
  private drawScene() {
    // prepare the scene and update the viewport
    this.webGlService.updateViewport();
    this.webGlService.prepareScene();

    // draw the scene
    const offset = 0;
    const vertexCount = 4;
    this.gl?.drawArrays(
      this.gl.TRIANGLE_STRIP,
      offset,
      vertexCount
    );
  }


}
