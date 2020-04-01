from starlette.testclient import TestClient

from main import app

client = TestClient(app)


def test_laguages():
    response = client.get("/")
    assert response.status_code == 200


def test_laguages_with_nbr_days():
    response = client.get("/40")
    assert response.status_code == 200
