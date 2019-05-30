import React from "react";
const Searchbox=({Searchfield,searchChange})=>{
	return(
		<div class="pa2">
			<input class="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Robots" onChange={searchChange}/>
		</div>		
		);
}
export default Searchbox;