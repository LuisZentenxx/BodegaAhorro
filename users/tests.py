from django.test import TestCase, RequestFactory
from django.contrib.auth.models import User
from users.views import search
from rest_framework.test import APIRequestFactory, force_authenticate

class SearchUserTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(username='testuser', email='test@example.com', password='testpassword')

    def test_search_empty_query(self):
        request = self.factory.get('/search?query=')
        force_authenticate(request, user=self.user)
        response = search(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['users']), 1)

    def test_search_matching_query(self):
        request = self.factory.get('/search?query=test@example.com')
        force_authenticate(request, user=self.user)
        response = search(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['users']), 1)
        self.assertEqual(response.data['users'][0]['email'], 'test@example.com')

    def test_search_no_matching_query(self):
        request = self.factory.get('/search?query=nomatch')
        force_authenticate(request, user=self.user)
        response = search(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['users']), 0)