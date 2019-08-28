import * as $ from 'jquery';
import { SweetClass } from './SweetClass';


$(document).ready(() => {
    $("body").append("<p>Immmmm ready!</p>");

    const basil = new SweetClass();
    $("body").append(`<p>${basil.p()}</p>`);

})
