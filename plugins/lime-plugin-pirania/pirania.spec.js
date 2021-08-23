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

describe('pirania captive portal', () => {
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

	//test to Pirania home page
	// eslint-disable-next-line jest/expect-expect
	it('shows a button to manage vouchers', async () => {
        listVoucher.mokcImplementation(async () => null);
        render(<PiraniaCaptivePortal />)

        expect(await screen.findByRole('button', {name: /manage vouchers/i})).toBeEnabled();

	//tests to manage vouchers
	it('shows a label text to search vouchers', async () => {
        render(<PiraniaCaptivePortal />);

        expect(await screen.findAllByLabelText('Buscar'));
	});

    it('shows an icon button to search vouchers', async () => {
        render(<PiraniaCaptivePortal />);

        expect(await screen.findByRole('button', {name: /search vouchers/})).toBeEnabled();
	});

	it('shows a dropdown to choose some categories of vouchers', async () => {

	});

	it('shows a button to create vouchers', async () => {
        render(<PiraniaCaptivePortal />);

        expect(await screen.findByRole('button', {name: /create vouchers/i})).toBeEnabled();
	});
});
