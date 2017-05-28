/**
 * Created by Warp on 26/05/2017.
 */
import {Injectable} from "@angular/core";
/**
 * Created by Warp on 26/05/2017.
 */


@Injectable()
export class UtilsService {


  constructor() {

  }

  isEmptyObject(obj) {
    return typeof obj === 'undefined' || obj == null;
  }

}
