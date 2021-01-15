import { h } from 'preact';
import { useState } from 'preact/hooks';
import I18n from 'i18n-js';
import { connect } from 'react-redux';

import '../style';

import ProgressBar from 'components/progressbar';
import Loading from 'components/loading';
import { useInterval } from 'react-use';

export const Setting = ({ expectedHost, expectedNetwork, delay=1000 }) => {
	const [ progress, setProgress ] = useState(0);
	const [ time, setTime ] = useState(120);

	const [ state, setState ] = useState({
		hostname: null,
		action: 'setting',
		notOnNetwork: false
	});

	function fetchHost (cb) {
		if (state.action === 'finish') return;
		if (state.action === 'setting') {
			setState({
				...state, action: 'checking'
			});
		}

		fetch('http://thisnode.info/cgi-bin/hostname')
			.then(res => res.text())
			.then(res => {
				res = res.split('\n')[0];
				if (res === expectedHost) {
					setState({
						...state,
						action: 'finish',
						hostname: res,
						notOnNetwork: false
					});
				}
				else if (state.notOnNetwork === false) {
					setState({
						...state,
						notOnNetwork: true
					});
				}
			})
			.catch(err => {
				if (state.notOnNetwork === true) {
					setState({
						...state,
						notOnNetwork: false
					});
				}
			});
	}

	function runProgress (totalTime, cb) {
		if (time > 0) setTime(time - 1);
		if (progress < 100) setProgress(progress + (100/totalTime));
		if (time <= 1) cb();
	}

	function reload () {
		window.location.href = 'http://thisnode.info/app';
	}

	useInterval(() => {
		runProgress(120, fetchHost);
	}, delay);


	return (
		<div class="container container-padded">
			{state.action !== 'finish'
				? (
					<div>
						{ state.action === 'setting'
							? (
								<div>
									<h1>{I18n.t('Setting network')}</h1>
									<ProgressBar progress={progress} />
									<div style={{ width: '100%' }}>
										<span style={{ margin: '0 auto', textAlign: 'center' }}>{I18n.t('Please wait')} {time} {I18n.t('seconds')}</span>
									</div>
								</div>
							)
							: false
						}
						{ state.action === 'checking'
							? (
								<div>
									<h1>{I18n.t('Checking connection')}</h1>
									<Loading />
									  { state.notOnNetwork
										? <p>{I18n.t('You are connected to another node in the network, try connecting to')} {expectedNetwork}/{expectedHost}</p>
										: <p>{I18n.t('You should try to connect to the network %{network}.', { network: expectedNetwork +'/'+expectedHost })} </p>
									  }
								</div>
							  )
							: false
						}
					</div>
				)
				: <div>
					<h1>{I18n.t('Congratulations')}</h1>
					<div>
						<p>{I18n.t('You have successfuly connected to')} {state.hostname}</p>
						<p>{I18n.t('You are now part of ')} {expectedNetwork}</p>
						<button onClick={reload}>{I18n.t('Reload page')}</button>
					</div>
				</div>
			}
		</div>
	);
};

const mapStateToProps = (state) => ({
	expectedHost: state.firstbootwizard.expectedHost,
	expectedNetwork: state.firstbootwizard.expectedNetwork
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
