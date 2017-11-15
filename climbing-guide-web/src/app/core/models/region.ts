export class Region {
   id: number;
   parent: number;
   revision: number;
   created_on: Date;
   approved_on: Date;
   active: boolean;
   longitude: number;
   latitude: number;
   size: string;
   name: string;
   info: string;
   restrictions: string;
   created_by: number;
   approved_by: number;
}
