import { type } from "os";

export type items = {
    list:{

        id: number,
        imgUrl: string,
        description: string
        price: number
        name: string
        bool:boolean
    }[]
}
export type state = {
    basket:{

        id: number
        img: string
        desc: string
        price: number
        name: string
        added:boolean
    }[],
    // isOn:boolean
}