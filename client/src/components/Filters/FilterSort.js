import React from "react";
import { connect } from "react-redux";
import { filterName } from "../../actions/videogames/videogames.action";

const FilterSort = ({ orderSort, setOrderName}) => {
    const handleOrder = (e) => {
        e.preventDefault();
        orderSort(e.target.value);
        setOrderName(`ordenado, ${e.target.value}`)
    }

    return(
        <>
      <select onChange={(e) => handleOrder(e)}>
        <option hidden value="">
          Order Name
        </option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </>
    )
}


export const mapDispatchToProps = (dispatch) => {
    return {
      orderSort: (payload) => dispatch(filterName(payload)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(FilterSort);