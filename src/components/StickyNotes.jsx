import { useState ,useRef} from 'react'
export default function StickyNote({onClose}) {
    const [allowMove, setAllowMove]=useState(false);
    const stickyNoteRef=useRef();
    const [dx, setDx]=useState(0);
    const [dy, setDy]=useState(0);

    function handleMouseUp(){
        setAllowMove(false);
    }
    function handleMouseDown(e){
        setAllowMove(true);
        const dimensions=stickyNoteRef.current.getBoundingClientRect();
        setDx(e.clientX-dimensions.x)
        setDy(e.clientY-dimensions.y)
        console.log(dx,dy); 
    }
    function handleMouseMove(e){
        if(allowMove)
        {
            console.log("allow moving");
            const x=e.clientX-dx;
            const y=e.clientY-dy;
            stickyNoteRef.current.style.left=x+'px';
            stickyNoteRef.current.style.top=y+'px'
        }
        
    }
  return (
      <div className="sticky-note" ref={stickyNoteRef}>
        <div className="sticky-note-header" 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            >
            <div>Sticky Notes</div>
            <div className="close" onClick={onClose}>&times;</div>
            </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    )
}
