
export default interface ProductProps {
    id: number,
    name: string,
    image: string,
    price: number,
    description: string,
    categories?: [],
    discount? : number ,
}