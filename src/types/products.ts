
export default interface ProductProps {
    id: number,
    url: string,
    name: string,
    image: string,
    price: number,
    description: string,
    categories?: [],
    discount? : number ,
}