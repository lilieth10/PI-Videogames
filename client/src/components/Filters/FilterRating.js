import React from "react";
import { connect } from "react-redux";
import { filterRating } from "../../actions/videogames/videogames.action";

const FilterRating  = ({ orderRating ,setOrderRating}) => {

    const handleRating = (e) => {
        e.preventDefault()
        orderRating(e.target.value)
        setOrderRating(`ordenado, ${e.target.value}`)
    }

    return(
        <>
        <select onChange={(e) => handleRating(e)}>
        <option hidden value="">
          Order Rating
        </option>
        <option value="best">Best rating</option>
        <option value="worst">Worst rating</option>
      </select>
        </>
    )
}


export const mapDispatchToProps = (dispatch) => {
    return{
        orderRating: (payload) => dispatch(filterRating(payload))
    }
}

export default connect(null, mapDispatchToProps)(FilterRating)