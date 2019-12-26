import { Injectable } from '@angular/core'

@Injectable()
export class FormatTimeService {
    timers = {
        preparationTime: 10,
        workoutTime: 20,
        restTime: 10,
        sets: 1,
        sessions: 1,
        totalTime: 40,
        activePhase: "Prepare"

    }

    addTotal() {
        return (this.timers.preparationTime + (this.timers.workoutTime + this.timers.restTime) * this.timers.sets) * this.timers.sessions
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