import Button from "../../shared/ui/Button/Button"
import { PropsWithChildren } from "react"

export const LoadButton: React.FC<PropsWithChildren<any>> = ({children}) => {
    return <Button size={'m'} color={'primary'}>{children}</Button>
}