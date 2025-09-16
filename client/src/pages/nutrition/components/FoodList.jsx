import { useState } from "react"
import Modal from 'react-modal';


export default function FoodList({ food, handleDelete }) {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    console.log(food)
    const [isExpanded, setIsExpanded] = useState(false)
    let expanded = isExpanded ? 'expanded' : 'collapsed'



    function deleteFood() {
        handleClose()
        handleDelete(food.nutrition_id)
    }
    
    return (
        <li key={food.nutrition_id} className='food-item'>
            <div className='food-item-div'>
                <button className='food-item-btn' onClick={() => setIsExpanded(prev => !prev)}>{food.food_name}</button>
                <p> {food.calories} Calories</p>
                <button className='trashcan-btn' onClick={handleOpen}>
                    <img className='trashcan-icon' src='/src/assets/trashcan.svg' alt='trashcan-icon'/>
                </button>

                {/* need to change ariaHideApp */}
                <Modal isOpen={open} onClose={handleClose} className='delete-food-modal' ariaHideApp={false} >
                    <div className='delete-food-modal-content '>
                        <p>Are you sure you want to remove {food.food_name}?</p>
                        <div className='modal-btns'>
                            <button onClick={deleteFood} className='modal-btn' style={{backgroundColor: '#00D100'}}>
                                Yes</button>
                            <button onClick={handleClose} className='modal-btn' style={{backgroundColor: '#f15152'}}>
                                Close</button>
                        </div>
                    </div>
                </Modal>

            </div>
            <div className={`${expanded}`}>
                <ul className='food-items-list'>
                    <li>Carbs: {food.carbs}</li>
                    <li>Protein: {food.protein}</li>
                    <li>Fats: {food.fat}</li>
                    <li>Sugar: {food.sugar}</li>
                    <li>Fiber: {food.fiber}</li>
                </ul>
                
                <button onClick={() => setIsExpanded(prev => !prev)} className='expand-food-item-btn'>Close</button>
            </div>
        </li>
    )
}