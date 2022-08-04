import React from "react";

function SortedFilter() {
  return (
    <div class="container pb-5">
      <div class="row">
        <div class="col-8"></div>
        <div class="col-2">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Sorted by number of seats:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="moreToLess">More to Less</option>
                    <option value="lessToMore">More to Less</option>
                </select>
        </div>
        <div class="col-2">
                <label style={{textAlign:"left", fontSize:"15px", fontWeight:"bold"}}>Sorted by number of price:</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>-</option>
                    <option value="highToLow">Highest to Lowest</option>
                    <option value="lowToHigh">Lowest to Highest</option>
                </select>        
        </div>
      </div>
    </div>
  );
}

export default SortedFilter;