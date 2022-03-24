import Container from './Container';
import AddTask from './AddTask';

export default function MainSection() {

    return (
        <div className="pt-4 px-10">
            <AddTask />
            <Container />
        </div>
    )
}