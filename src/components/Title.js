import './Title.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = () => {
  
    return (<div className='container'>
        <svg  className="svg" viewBox="0 0 2000 300">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="80%">Malaysia Prayer Times</text>
  </symbol>

  <g class="g-ants">
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
  </g>
</svg>
    </div> );
}
 
export default Title;