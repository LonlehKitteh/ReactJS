import { useData } from "./useData"

export default function useWord() {
    const worlds = useData() || []
    const random = Math.floor(Math.random() * worlds.length)

    return worlds[random]
}
