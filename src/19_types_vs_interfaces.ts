// interface
// 1. object shapes that you expect to extend
// 2. supports declaration merging
// types
// 1. more general -> objects, unions, intersections, functions
// 2. can not be reopened -> no merging

// Declaration merging
interface Box1 {
    width:number;
}

interface Box1{
    height:number;
}

const boxDemo: Box1 = {
    width:10,
    height:10,
}

// no merging -> can't redeclare type alias names
type Bag = {size:number};
type Bag = {color:string};

