const resolvers = {
    grid: ()=>{
       let grids = document.querySelectorAll('[data-grid]')
         grids.forEach(grid=>{
            //get the grid data
            
            grid.dataset.grid

        })
    }
}
