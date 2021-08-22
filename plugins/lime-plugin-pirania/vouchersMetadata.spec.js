/* eslint-disable jest/expect-expect */
import { h } from 'preact';
import { render as tlRender, fireEvent, cleanup, act, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';

import PiraniaCaptivePortal from './src/PiraniaCaptivePortal';
import { manageVoucher, createVoucher, editVoucher } from './src/piraniaApi';
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
		manageVoucher.mokcImplementation(async () =>
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

	//tests for creation vouchers metadata
	it('shows the list of voucher passwords', async () => {

	});

	it('shows the vouchers description', async () => {

	});

	it('shows the node name', async () => {

	});

	it('shows the creation date of the voucher', async () => {

	});

	it('shows a button to accept', async () => {

	});

});
