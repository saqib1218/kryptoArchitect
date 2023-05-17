// @ts-ignore 
import Typed from 'react-typed';
export const getLongestDuration = (strings: string[], typed: any): number => {
   let longestDuration = 0;

   for (let i = 0; i < strings.length; i++) {
      const duration = typed ? typed.getDuration(strings[i]) : 0;
      if (duration > longestDuration) {
         longestDuration = duration;
      }
   }

   return longestDuration;
};