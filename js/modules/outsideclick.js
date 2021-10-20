
export const arrayEvents = ['touchstart', 'click'];
export default function outsideClick(element, callback) {
   
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        arrayEvents.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick);
        });
        element.setAttribute(outside, '');
    
    }
  
    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside);

            arrayEvents.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
           
            callback();
        }
    }
}