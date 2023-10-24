const btnOpen = document.getElementById('btn-open')


btnOpen.addEventListener('click', openModalWindow)

const modalW = function createModal() {
	let modalCreate = document.createElement('div')
	modalCreate.classList.add('modal')
	modalCreate.insertAdjacentHTML('afterbegin', `
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<p>Modal body text goes here.</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary">Save changes</button>
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
	`)

	document.body.appendChild(modalCreate)


	return modalCreate
}
modalW()

function openModalWindow() {
	const modalN = document.querySelector('.modal')
	modalN.classList.add('active')

}
