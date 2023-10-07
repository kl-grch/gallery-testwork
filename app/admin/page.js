import './adminPage.scss';

export default function AdminPage(params) {
    return (
      <div className="admin container">
        <button>Просмотр</button>
        <button>Добавить</button>
        <button>Переименовать</button>
        <button>Удалить</button>
      </div>
    );
};
