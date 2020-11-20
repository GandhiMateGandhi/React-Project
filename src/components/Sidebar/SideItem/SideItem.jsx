import './SideItem.scss'

const SideItem = (props) => {
    return (
            <div>
                <a>{props.item}</a>
            </div>
    );
}

export default SideItem;