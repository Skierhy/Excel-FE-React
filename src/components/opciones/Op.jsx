import { useEffect } from 'react';
import { TablaGet } from '../table/TablaGet';
import PropTypes from 'prop-types';
import { TablaSearch } from '../table/TablaSearch';
import { useOP } from '../../hooks/useOP';
import './Op.css';

export const Op = ({ ExcelJson }) => {
	const {
		TableShow,
		handleDelete,
		searchTable,
		search,
		handleUpdate,
		setId,
		convertirJSON,
		showTable,
	} = useOP();

	useEffect(() => {
		showTable();
	}, [ExcelJson]);

	return (
		<>
			<div className='container-op'>
				<h1 className='text-center'>
					Opciones (recargar pagina haga una operación)
				</h1>
				<div className='row mt-5'>
					<div className='col-4 animate__animated animate__backInLeft'>
						<div
							className='list-group'
							id='list-tab'
							role='tablist'
						>
							<a
								className='list-group-item list-group-item-action'
								id='list-home-list'
								data-bs-toggle='list'
								href='#list-home'
								role='tab'
								aria-controls='list-home'
							>
								Mostrar todas las tablas
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-profile-list'
								data-bs-toggle='list'
								href='#list-profile'
								role='tab'
								aria-controls='list-profile'
							>
								Buscar una tabla
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-messages-list'
								data-bs-toggle='list'
								href='#list-messages'
								role='tab'
								aria-controls='list-messages'
							>
								Eliminar tabla
							</a>
							<a
								className='list-group-item list-group-item-action'
								id='list-settings-list'
								data-bs-toggle='list'
								href='#list-settings'
								role='tab'
								aria-controls='list-settings'
							>
								Actualizar tabla
							</a>
						</div>
					</div>
					<div className='col-8'>
						<div className='tab-content' id='nav-tabContent'>
							<div
								className='tab-pane fade animate__animated animate__backInRight'
								id='list-home'
								role='tabpanel'
								aria-labelledby='list-home-list'
							>
								<button
									className='btn btn-primary'
									onClick={showTable}
								>
									Mostrar tablas
								</button>
								<TablaGet ExcelJson={TableShow} />
							</div>
							<div
								className='tab-pane fade animate__animated animate__backInRight'
								id='list-profile'
								role='tabpanel'
								aria-labelledby='list-profile-list'
							>
								<h1 className=' text-center'>Buscar tabla</h1>
								<form
									className='row g-3'
									onSubmit={(event) => {
										searchTable(event);
									}}
								>
									<div className='col-md-6'>
										<label
											htmlFor='inputState'
											className='form-label'
										>
											Selecciona la tabla
										</label>
										<select
											id='inputState'
											className='form-select'
											onChange={(event) => {
												setId(event.target.value);
											}}
										>
											<option selected disabled>
												Selecciona una tabla
											</option>
											{TableShow.map((item, index) => (
												<option
													key={index}
													value={item._id}
												>
													{item._id}
												</option>
											))}
										</select>
									</div>
									<div className='col-12'>
										<button
											type='submit'
											className='btn btn-primary'
										>
											Buscar tabla
										</button>
									</div>
								</form>
								{search.length > 0 && (
									<TablaSearch ExcelJson={search} />
								)}
							</div>
							<div
								className='tab-pane fade animate__animated animate__backInRight'
								id='list-messages'
								role='tabpanel'
								aria-labelledby='list-messages-list'
							>
								<h1 className=' text-center'>Eliminar tabla</h1>
								<form
									className='row g-3'
									onSubmit={handleDelete}
								>
									<div className='col-md-6'>
										<label
											htmlFor='inputState'
											className='form-label'
										>
											Selecciona la tabla
										</label>
										<select
											id='inputState'
											className='form-select'
											onChange={(event) =>
												setId(event.target.value)
											}
										>
											<option selected disabled>
												Selecciona una tabla
											</option>
											{TableShow.map((item, index) => (
												<option key={index}>
													{item._id}
												</option>
											))}
										</select>
									</div>
									<div className='col-12'>
										<button
											type='submit'
											className='btn btn-danger'
										>
											Eliminar
										</button>
									</div>
								</form>
							</div>
							<div
								className='tab-pane fade animate__animated animate__backInRight'
								id='list-settings'
								role='tabpanel'
								aria-labelledby='list-settings-list'
							>
								<h1 className=' text-center'>
									Actualizar tabla
								</h1>
								<form
									className='row g-3'
									onSubmit={handleUpdate}
								>
									<div className='col-md-6'>
										<label
											htmlFor='inputState'
											className='form-label'
										>
											Selecciona la tabla
										</label>
										<select
											id='inputState'
											className='form-select'
											onChange={(event) => {
												setId(event.target.value);
											}}
										>
											<option selected disabled>
												Selecciona una tabla
											</option>
											{TableShow.map((item, index) => (
												<option key={index}>
													{item._id}
												</option>
											))}
										</select>
									</div>
									<div className='col-12'>
										<label
											htmlFor='file'
											className='form-label'
										>
											Ingrese su archivo excel aquí
										</label>
										<input
											className='form-control form-control-lg'
											type='file'
											name='upload'
											id='upload'
											onChange={convertirJSON}
										/>
									</div>
									<div className='col-12'>
										<button
											type='submit'
											className='btn btn-info'
										>
											Actualizar
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
// validar props
Op.propTypes = {
	ExcelJson: PropTypes.array.isRequired,
};
