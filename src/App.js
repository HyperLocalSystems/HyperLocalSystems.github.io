import './App.css';
import Mappicker from './components/mappicker';


function App() {
  var geohash = require('ngeohash');
  console.log(geohash.encode(37.8324, 112.5584));
  var latlon = geohash.decode('ww8p1r4t8');
  console.log(latlon.latitude);
  console.log(latlon.longitude);

  // home = t9yhmvxpx

  var b = geohash.decode_bbox('ww8p1r4t8');

  var n = geohash.neighbors('t9yhm');
  // t9yhm
  // t9yht
  // t9yhw
  // t9yhq
  // t9yhn
  // t9yhj
  // t9yhh
  // t9yhk
  // t9yhs
  console.log("neighbors");
  console.log(n);
  // n.map(function (item) {
  //   console.log(item);
  // });
  console.log(b);

  return (
    <div className="App">
      <Mappicker></Mappicker>
    </div>
  );
}

export default App;
