export default function AddPhoto(props: { startAddingPost: any; history: any; }) {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const imageLink = e.target.elements.link.value
        const description = e.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink) {
            props.startAddingPost(post)
            props.history.push('/')
        }
    }

    return (
        <div>
            <div className="form">
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" placeholder="Link" name="link" />
                    <input type="text" placeholder="Description" name="description" />
                    <button> Post </button>
                </form>
            </div>
        </div>
    )
}
