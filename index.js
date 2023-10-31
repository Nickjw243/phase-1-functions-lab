// Code your solution in this file!
function distanceFromHqInBlocks(puBlock) {
    const hqBlock = 42
    let distance
    if (puBlock > hqBlock) {
        distance = puBlock - hqBlock
    } else if (puBlock < hqBlock) {
        distance = hqBlock - puBlock
    }
    return distance
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(puFeet) {
    let distance2 = 264 * (distanceFromHqInBlocks(puFeet))
    return distance2
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination) {
    let distance3
    if (start > destination) {
        distance3 = (start - destination) * 264
    } else if (start < destination) {
        distance3 = (destination - start) * 264
    }
    return distance3
}
distanceTravelledInFeet()

function calculatesFarePrice(start, destination) {
    let price
    if (distanceTravelledInFeet(start, destination) <= 400) {
        price = distanceTravelledInFeet(start, destination) * 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        price = (distanceTravelledInFeet(start, destination) - 400) * .02 
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        price = 25
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        price = 'cannot travel that far'
    }
    return price
}
calculatesFarePrice()