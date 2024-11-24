import "../../../../styles/editExerciseForm.css";

// Utility function to format a date in YYYY-MM-DD format
const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const EditExerciseForm = ({ exercise, onChange, onSubmit, onCancel }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...exercise,
      [name]:
        name === "calories" || name === "duration" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="edit-name">Exercise Name:</label>
          <input
            id="edit-name"
            type="text"
            name="name"
            value={exercise.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="edit-calories">Calories Burned:</label>
          <input
            id="edit-calories"
            type="number"
            name="calories"
            value={exercise.calories}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="edit-date">Date:</label>
          <input
            id="edit-date"
            type="date"
            name="date"
            value={formatDate(exercise.date)}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="edit-duration">Duration (in minutes):</label>
          <input
            id="edit-duration"
            type="number"
            name="duration"
            value={exercise.duration}
            onChange={handleChange}
          />
        </div>
        <div className="editCard-buttons">
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExerciseForm;
