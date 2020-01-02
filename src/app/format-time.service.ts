import { Injectable } from '@angular/core'
import { ThrowStmt } from '@angular/compiler'

@Injectable()
export class FormatTimeService {
    timers = {
        preparationTime: 10,
        workoutTime: 20,
        restTime: 10,
        sets: 1,
        sessions: 1,
        totalTime: 40,
        activePhase: "Prepare",
        isStart: false,
        worktime: 10,
        // border: "rgb(83, 185, 83)",
        // borderColor: "red",
        stop: false,
        disabled: false,
        timerInterval: null
    }

    addTotal() {
        return (this.timers.preparationTime + (this.timers.workoutTime + this.timers.restTime) * this.timers.sets) * this.timers.sessions
    }

    setWorktime(){
        return this.timers.worktime = this.timers.preparationTime
    }

    color = {
        borderColor: "rgb(83, 185, 83)",
        color: "rgb(83, 185, 83)"
      }

      //dopisac onStartStop
    onStartStop(){
        if(!this.timers.isStart){
            this.timers.isStart = !this.timers.isStart;
            this.timers.timerInterval = setInterval(() =>{
                this.decreaseTotalTimer();
                if(this.timers.stop === true ){
                    clearInterval(this.timers.timerInterval);
                }
            }, 1000)
        } else {
            this.timers.timerInterval && clearInterval (this.timers.timerInterval);
            this.timers.isStart = true;
            this.timers.timerInterval = null
        }
    }

    decreaseTotalTimer(){
        this.timers.totalTime =  this.timers.totalTime - 1
        this.timers.worktime = this.timers.worktime - 1
        console.log(this.timers.totalTime, this.timers.worktime)

        if(this.timers.worktime === 0 && this.timers.activePhase === "Prepare") {
            this.timers.activePhase = "Work";
            this.timers.workoutTime = this.timers.workoutTime;
            this.timers.worktime = this.timers.workoutTime;
            this.color.borderColor = "rgb(219, 93, 93)";
            this.color.color = "rgb(219, 93, 93)"
        } else if (this.timers.worktime === 0 && this.timers.activePhase === "Work"){
            this.timers.activePhase = "Break";
            this.timers.restTime = this.timers.restTime;
            this.timers.worktime = this.timers.restTime;
            this.color.borderColor = "#6DD5E3";
            this.color.color = "#6DD5E3";
        } else if (this.timers.worktime === 0 && this.timers.activePhase === "Break"){
            if (this.timers.sets === 1) {
                this.timers.activePhase = "Finished";
                this.timers.totalTime = 0;
                this.color.borderColor = "yellow";
                this.color.color = "yellow";
                this.timers.sets = 0;
                this.timers.stop = true;
                this.timers.disabled = true
            } else {
                this.timers.activePhase = "Work";
                this.timers.worktime = this.timers.workoutTime;
                this.timers.sets = this.timers.sets - 1;
                this.color.color = "rgb(219, 93, 93)";
                this.color.borderColor = "rgb(219, 93, 93)"
            }
        } 
    }

    onReset(){
        this.timers.preparationTime = 10;
        this.timers.workoutTime = 20;
        this.timers.restTime = 10;
        this.timers.sets = 1;
        this.timers.sessions = 1;
        this.timers.totalTime = 40;
        this.timers.activePhase = "Prepare";
        this.timers.isStart = false;
        this.timers.worktime = 10;
        this.color.color = "rgb(83, 185, 83)";
        this.color.borderColor = "rgb(83, 185, 83)";
        this.timers.stop = false;
        this.timers.disabled = false;

        // dopisac let self
    }

    increasePreparation() {
        if (this.timers.preparationTime < 60) {
            this.timers.preparationTime += 10;
            this.timers.totalTime = this.addTotal();
        }
        console.log(this.timers.preparationTime, this.timers.totalTime)
    }

    decreasePreparation() {
        if (this.timers.preparationTime > 10) {
            this.timers.preparationTime -= 10;
            this.timers.totalTime = this.addTotal();
        }
        console.log(this.timers.preparationTime, this.timers.totalTime)
    }

    increaseWorkout() {
        if (this.timers.workoutTime < 300) {
            this.timers.workoutTime += 20;
            this.timers.totalTime = this.addTotal();
        }
        console.log(this.timers.workoutTime, this.timers.totalTime)
    }
    decreaseWorkout() {
        if (this.timers.workoutTime > 20) {
            this.timers.workoutTime -= 20;
            this.timers.totalTime = this.addTotal();
        }
        console.log(this.timers.workoutTime, this.timers.totalTime)
    }

    increaseRest() {
        if (this.timers.restTime < 300) {
            this.timers.restTime += 10;
            this.timers.totalTime = this.addTotal()
        }
        console.log(this.timers.restTime, this.timers.totalTime)
    }

    decreaseRest() {
        if (this.timers.restTime > 10) {
            this.timers.restTime -= 10;
            this.timers.totalTime = this.addTotal()
        }
        console.log(this.timers.restTime, this.timers.totalTime)
    }

    increaseSets() {
        if (this.timers.sets < 6) {
            this.timers.sets += 1;
            this.timers.totalTime = this.addTotal()
        }
        console.log(this.timers.sets, this.timers.totalTime)
    }

    decreaseSets() {
        if(this.timers.sets > 1){
          this.timers.sets -= 1;
          this.timers.totalTime = this.addTotal()
        }
        console.log(this.timers.sets, this.timers.totalTime)
      }

    formatTimer = (time: number) => {
        let minute: number = Math.floor(time / 60);
        let minuteTxt: string | number;
        if (minute < 10) minuteTxt = '0' + minute;

        let second = time - 60 * minute;
        let secondTxt: string | number;
        if (second < 10) secondTxt = '0' + second;

        return `${minute < 10 ? minuteTxt : minute}:${second < 10 ? secondTxt : second}`;
    }
}