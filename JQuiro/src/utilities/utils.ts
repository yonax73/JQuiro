/************************************************
*                                               *
*          JQuiro Utilities functions           *
*                                               *
************************************************/
/**
@ Autor : Yonatan Alexis Quintero Rodriguez
@ Version: 0.1
@ Fecha : 5 _ 04 _ 2014
* clases utilidades
**/

export class utils {





    /**
      * get HtmlElement.
      * @param id The id of Html element.      
      */
    static  getId(_id: string): HTMLElement{

        return document.getElementById(_id);
    }









    /**
      * Download file in the client side ( the file must be previously generated ). Not Supported by Internet Explorer.
      * @param blob The object Blob with data from the file system. 
      * @param nameFile The name file.      
      */
    static downloadFile(_blob: Blob, _nameFile: string) {

        var reader = new FileReader();

        reader.onload = function (evt) {

           

                var save = <any>document.createElement('a');
                save.href = evt.target.result;
                save.target = '_blank';
                save.download = _nameFile || 'jqFile.dat';

                var click = document.createEvent('MouseEvent');
                click.initEvent('click', true, true);

                save.dispatchEvent(click);

           
        }
        

        reader.readAsDataURL(_blob);
        
    }






    /**
  * Delays the program execution for the given number of milliseconds.
  * @param milliseconds The milleseconds for delays the program execution.       .      
  */
    static sleep(_milliseconds: number) {

        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + _milliseconds);

    }



}
