import {useParams} from "react-router-dom";

export default function DefaultPage() {
    const { id } = useParams();

    return (
        <div> Default content for page without header { id ? `called with Id: ${id}` : ""} </div>
    )
}
