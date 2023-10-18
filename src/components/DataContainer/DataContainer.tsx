import"./DataContainer.scss"
function DataContainer() {
  return (
<section className="data-container">

<div className="ip-address">
  <label>IP Address</label>
  <p>192.212.174.101</p>
</div>
<div className="location">
<label > Location</label>
<p>Brooklyn, NY 10001</p>
</div>
<div className="timezone">
  <label >Timezone</label>
  <p>
    UTC -05:00
    {/* add offset value dynamically using the API  */}
  </p>
</div>

<div className="isp"><label >  ISP</label>
<p>SpaceX Starlink</p>
</div>

</section>
  )
}

export default DataContainer