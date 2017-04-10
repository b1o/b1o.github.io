import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MdlSliderComponent } from '@angular-mdl/core';

@Component({
    selector: 'audio-vis',
    templateUrl: './audio.component.html'
})

export class AudioComponent implements AfterViewInit {
    public progress: number;
    public duration;
    public currentTime;
    @ViewChild('board') public canvas;
    @ViewChild('slider') public slider: MdlSliderComponent;
    public bufferLength = 2048;
    public barRatio = 2.5;
    public barCount;
    public barHeightRatio = 2;
    public audioSrc;
    public useMic = false;
    public fullscreen = true;

    private canvasContext: CanvasRenderingContext2D; ;
    private audio: HTMLAudioElement;
    private audioContext: AudioContext = new AudioContext();
    private analyzer: AnalyserNode = this.audioContext.createAnalyser();
    private dataArray: Uint8Array = new Uint8Array(this.bufferLength);
    private WIDTH;
    private HEIGHT;
    private previousSliderValue;
    private source;
    private requestId;
    private proportion = (5 / this.bufferLength);
    private mic;

    constructor() {
    }

    public play() {
        this.audio.play();

    }

    public pause() {
        this.audio.pause();
    }

    public onSliderChange(value) {
        this.analyzer.fftSize = value;
    }

    public getSliderStep() {
        console.log(this.bufferLength);
    }

    public changeInput() {

        if (this.useMic) {

            this.source.disconnect();
            this.audio = new Audio();
            this.audio.src = '../../../assets/music.mp3';
            this.mic.getTracks()[0].stop();
            this.audio.addEventListener('loadedmetadata', () => {
                this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
                                this.duration = (this.audio.duration / 60).toFixed(2);
                                                      this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
                this.duration = (this.audio.duration / 60).toFixed(2);
                this.analyzer = this.audioContext.createAnalyser();
                this.source = this.audioContext.createMediaElementSource(this.audio);
                this.source.connect(this.analyzer);
                this.analyzer.connect(this.audioContext.destination);
                this.analyzer.fftSize = this.bufferLength;
                this.analyzer.smoothingTimeConstant = 0.5;
                this.useMic = false;
                this.draw();
            });
        } else {
            cancelAnimationFrame(this.requestId);
            this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
            this.source.disconnect();
            navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                this.audio = new Audio();
                this.mic = stream;
                this.source = this.audioContext.createMediaStreamSource(stream);
                this.source.connect(this.analyzer);
                this.analyzer.disconnect();
                this.analyzer.fftSize = this.bufferLength;
                this.draw();
                this.useMic = true;
            });
        }
    }

    public ngAfterViewInit() {
          this.canvas.nativeElement.width = document.body.clientWidth;
          this.canvas.nativeElement.height = document.body.clientHeight;
          this.canvasContext = this.canvas.nativeElement.getContext('2d');
          this.WIDTH = this.canvas.nativeElement.width;
          this.HEIGHT = this.canvas.nativeElement.height;
          if (this.useMic) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                this.source = this.audioContext.createMediaStreamSource(stream);
                this.source.connect(this.analyzer);
                this.analyzer.fftSize = this.bufferLength;
            });

            return;
        }
          this.audio = new Audio();
          this.audio.src = '../../../assets/music.mp3';
          this.audio.addEventListener('loadedmetadata', () => {
            this.duration = (this.audio.duration / 60).toFixed(2);

            this.source = this.audioContext.createMediaElementSource(this.audio);
            this.source.connect(this.analyzer);
            this.analyzer.connect(this.audioContext.destination);
            this.analyzer.fftSize = this.bufferLength;
            this.analyzer.smoothingTimeConstant = 0.5;
            this.draw()

        });
          this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);

    }

    public draw() {
        let self = this;
        this.requestId = requestAnimationFrame(this.draw.bind(this));
        this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);

        this.canvasContext.fillStyle = 'rgb(200, 200, 200)';
        if (!this.useMic) {
            this.analyzer.getByteFrequencyData(this.dataArray);
            let x = 0;
            let barWidth = (this.WIDTH / this.bufferLength) * this.barRatio;
            this.barCount = Math.floor(this.WIDTH / barWidth);
            let barHeight;

            for (let i = 0; i < this.bufferLength; i += 2) {
                let barHeight = Math.abs(this.dataArray[i] / this.barHeightRatio);

                this.canvasContext.beginPath();

                this.canvasContext.strokeStyle = `rgb(${barHeight + 100}, 50, 50)`;
                this.canvasContext.lineWidth = this.proportion * i ; 
                this.canvasContext.arc(this.WIDTH / 2, this.HEIGHT / 2, (this.dataArray[i]), 0, 2 * Math.PI);
                this.canvasContext.stroke();
                // x += barWidth + 1;
            }

        } else {
            this.canvasContext.lineWidth = 2;
            this.canvasContext.strokeStyle = 'rgb(0, 0, 0)';
            this.analyzer.getByteTimeDomainData(this.dataArray);

            this.canvasContext.beginPath();

            let sliceWidth = this.WIDTH * 1.0 / this.bufferLength;
            let x = 0;

            for (let i = 0; i < this.bufferLength; i++) {

                let v = this.dataArray[i] / 128.0;
                let y = v * this.HEIGHT / 2;

                if (i === 0) {
                    this.canvasContext.moveTo(x, y);
                } else {
                    this.canvasContext.lineTo(x, y);
                }

                x += sliceWidth;
            }

            this.canvasContext.lineTo(this.canvas.nativeElement.width, this.canvas.nativeElement.height / 2);
            this.canvasContext.stroke();
        ;
    }

}
