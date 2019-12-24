export class FormatTimeService {
    formatTimer = (time: number) => {
        let minute: number= Math.floor(time / 60);
        let minuteTxt:string|number;
        if (minute < 10) minuteTxt = '0' + minute;
      
        let second = time - 60 * minute;
        let secondTxt: string|number;
        if (second < 10) secondTxt = '0' + second;
    
        return `${minute<10?minuteTxt:minute}:${second<10?secondTxt:second}`;
    }
}