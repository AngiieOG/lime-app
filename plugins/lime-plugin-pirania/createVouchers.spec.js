/* eslint-disable jest/expect-expect */
import { h } from 'preact';
import { render as tlRender, fireEvent, cleanup, act, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';

import PiraniaCaptivePortal from './src/PiraniaCaptivePortal';
import { listVoucher, createVoucher, editVoucher } from './src/piraniaApi';
import { ReactQueryCacheProvider } from 'react-query';
import queryCache from 'utils/queryCache';

// jest.mock para las API Endpoint
jest.mock('./src/piraniaApi');

const render = (ui) => tlRender(
	<ReactQueryCacheProvider queryCache={queryCache}>
		{ui}
	</ReactQueryCacheProvider>
)

describe('create vouchers page', () => {
	beforeAll(() => {
		jest.useFakeTimers();
	});

	/*
      beforeEach(). Antes de cada test se mockea la implementacion
      de las llamadas a las API.
    */

	beforeEach(() => {
		listVoucher.mokcImplementation(async () =>
			({/*aqui tendria que ir lo que hace esta funcion*/})
		);
		createVoucher.mokcImplementation(async () => null);
		editVoucher.mokcImplementation(async () => null);
	});

	afterEach(() => {
		cleanup();
		act(() => queryCache.clear());
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	//En general, se testea que se rendericen los elementos esperados
	//en cada escenario o página.

	//tests to create vouchers screen
	it('shows a label text to write the voucher description', async () => {
		render(<PiraniaCaptivePortal />);
		expect( screen.queryByPlaceholderText('Write the description of your voucher here...')).toBeInTheDocument();
		//esa es una opcion, la otra es getByLabelText
	});

	it('shows a dropdown to choose voucher duration', async () => {
		render(<PiraniaCaptivePortal />);
		const voucherDuration = screen.getByTestId('voucher-duration');
		expect(voucherDuration).toBeInTheDocument();

	});

	it('shows a dropdown to choose how many vouchers to create', async () => {
		render(<PiraniaCaptivePortal />);
		const voucherNumber = screen.getByTestId('voucher-number');
		expect(voucherNumber).toBeInTheDocument();
	});

	it('shows a permanence checkbox', async () => {
		render(<PiraniaCaptivePortal />);
		const checkbox = screen.getByTestId('permanence-checkbox');
		expect(checkbox).toBeInTheDocument();
	});

	it('shows a dropdown to choose an expiration date', async () => {
		render(<PiraniaCaptivePortal />);
		//expira en 10 días, por ejemplo
		const expirationDate = screen.getByTestId('expiration-date');
		expect(expirationDate).toBeInTheDocument();

	});

	it('shows a button to save changes and create vouchers', async () => {
		render(<PiraniaCaptivePortal />);
		expect(await screen.findByRole('button', {name: /create voucher/i})).toBeEnabled();
	});

	it('shows an error to create vouchers', async () => {
		render(<PiraniaCaptivePortal />);

	});

});
