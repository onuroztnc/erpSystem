import React from 'react'
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import "./Home.css"
import InfoIcon from '@material-ui/icons/Info'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import CocktailList from '../Component/CocktailList'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        transform: 'translateZ(0)',
        width: 800,
        height: 650,
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function Home() {
    // const size = useWindowSize();
    // const classes = useStyles();

    // const deneme = size.width / size.height;

    return (
        // <div className='Home'>
        //     <div className={classes.root}>
        //         <GridList cellHeight={180} className={classes.gridList} cols={size.width / (classes.gridList.height)}>
        //             {dataList.map((data) => (
        //                 <GridListTile key={data.id}>
        //                     <img src={data.image} alt={data.title} />
        //                     <GridListTileBar
        //                         title={data.title}
        //                         subtitle={data.description}
        //                         style={{ textAlign: 'start' }}
        //                         actionIcon={
        //                             <IconButton aria-label={`info about ${data.title}`} className={classes.icons}>
        //                                 <InfoIcon style={{ color: "white" }} />
        //                             </IconButton>
        //                         }
        //                         actionPosition="right"
        //                         className={classes.titleBar}
        //                     />
        //                 </GridListTile>
        //             ))}

        //         </GridList>
        //     </div>
        // </div >
        <div className='Home'>
            <CocktailList />
        </div>
    )
}

// function useWindowSize() {
//     // Initialize state with undefined width/height so server and client renders match
//     // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//     const [windowSize, setWindowSize] = useState({
//         width: undefined,
//         height: undefined,
//     });

//     useEffect(() => {
//         // Handler to call on window resize
//         function handleResize() {
//             // Set window width/height to state
//             setWindowSize({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         }

//         // Add event listener
//         window.addEventListener("resize", handleResize);

//         // Call handler right away so state gets updated with initial window size
//         handleResize();

//         // Remove event listener on cleanup
//         return () => window.removeEventListener("resize", handleResize);
//     }, []); // Empty array ensures that effect is only run on mount

//     return windowSize;
// }


export default Home